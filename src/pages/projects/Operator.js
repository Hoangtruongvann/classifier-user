import React, { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import sampleServices from "../../service/sampleServices";
import axiosClient from "../../service/request";
import request from "../../service/request";


function App() {
  const [answers, setAnswers] = useState([]);
  const [sample, setSample] = useState('');
  const newAnswerRef = useRef();

  const [form, setForm] = useState('');
  const deleteAnswer = (id) => {
    setAnswers(answers.filter((e) => e.id !== id));
  };

  const onAddNewAnswer = () => {
    if (newAnswerRef.current.value) {
      setAnswers([
        ...answers,
        { id: new Date().valueOf(), content: newAnswerRef.current.value },
      ]);
      newAnswerRef.current.value = "";
    } else {
      alert("empty answer");
    }
  };

  const onSubmit = async () => {
    console.log(sample);
    const res = await axiosClient.put(`/samples/lable?id=${sample.id}&lable=${form}`, {
      id: sample.id,
      label: form
  });
  };


  // get id from url http://localhost:3000/projects/1/operator
  const id = window.location.pathname.split("/")[2];
  // get samples
  const getSample = async () => {
    try {
      const response = await axiosClient.get(`/samples/?project_id=${id}&status=true`);
      setSample(response.data[0]);
      setAnswers([...answers,response.data[0].label])
      // handle response
      console.log([...answers,response.data[0].label])
      console.log(response.data[0].label)
    } catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    getSample();
  }, []);

  const handleAddNewValue = () => {
   console.log(form)
  setAnswers([...answers,form])
  }

  const handleDeleteAnswer = (value) => {
    setAnswers(answers.filter((e) => e !== value));
  }
  return (
    <div>
      <div
        style={{
          width: "100%",
          border: "2px solid grey",
          margin: "0 auto",
          padding: 10,
          borderRadius: 5,
          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p style={{ color: "black" }}>{sample.sample}</p>
      </div>
      <div style={{ marginTop: 30 }}>
        <div>
          <input
            style={{
              width: "100%",
              border: "2px solid grey",
              margin: "0 auto",
              padding: 10,
            }}
            placeholder="Add new answer"
            value={form}
            onChange={(e) => setForm(e.target.value)}
         
            // ref={newAnswerRef}
          ></input>
          <button
            style={{
              backgroundColor: "#f00",
              width: 100,
              height: 45,
              marginTop: 10,
              borderRadius: 10,
              color: "white",
            }}
            // onClick={() => onAddNewAnswer()}
            onClick={handleAddNewValue}
          >
            Add
          </button>
        </div>
      </div>

      <div style={{ marginTop: 30 }}>
        <text>List of answers</text>
        <div style={{ margin: 10 }}>
          <ul>
            {answers.length > 0 ? (
              answers.map((e,i) => (
                <div
                  key={i}
                  style={{
                    width: "100%",
                    border: "1px solid grey",
                    margin: "0 auto",
                    padding: 10,
                    flexDirection: "row",
                    marginBottom: 10,
                    borderRadius: 5,
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <text>{e}</text>
                    <button onClick={()=>handleDeleteAnswer(e)}>
                      <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p>no answer avaiable</p>
              </div>
            )}
          </ul>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <button
          style={{
            backgroundColor: "#f00",
            width: 150,
            height: 70,
            marginTop: 10,
            borderRadius: 10,
            color: "white",
          }}
          onClick={() => onSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
