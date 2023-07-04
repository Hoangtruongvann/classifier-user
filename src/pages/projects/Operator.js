import React, { useRef, useState } from "react";
import { data2 } from "../../fakers/project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const listAnswers = [
  {
    id: 1,
    content:
      "answer 1 answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1 answer 1 answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1 answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1 answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1",
  },
  {
    id: 2,
    content: "answer 2",
  },
  {
    id: 3,
    content: "answer 3",
  },
];

function App() {
  const [answers, setAnswers] = useState(listAnswers);
  const newAnswerRef = useRef();

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

  const onSubmit = () => {
    console.log(answers);
  };

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
        <p style={{ color: "black" }}>{data2.question}</p>
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
            ref={newAnswerRef}
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
            onClick={() => onAddNewAnswer()}
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
              answers.map((e) => (
                <div
                  key={e.id}
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
                    <text>{e.content}</text>
                    <button onClick={() => deleteAnswer(e.id)}>
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
