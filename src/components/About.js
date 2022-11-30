import React from "react";

export default function About(props) {
  return (
    <div
      className="container "
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#343a40",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button  text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#343a40",
              }}
            >
              Read me
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#343a40",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <strong>This is the best text analyser.</strong> It is made solely
              for learning purposes.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button collapsed text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#343a40",
              }}
            >
              Random text
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#343a40",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              ratione mollitia unde enim sunt rem accusamus laborum quod
              molestiae iusto possimus impedit magnam aspernatur cumque beatae,
              qui ea ducimus? Aperiam.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button collapsed text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#343a40",
              }}
            >
              Some more random text
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#343a40",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus ad optio sit et repellat possimus laudantium sunt
              quasi. Minus amet est soluta vel, possimus quisquam cumque eveniet
              animi repellendus harum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
