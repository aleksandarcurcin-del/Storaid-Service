import { useState } from "react";
import "./Faq.css";

const items = [
  {
    q: "Can I access my stored items anytime?",
    a: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
  },
  {
    q: "Do you offer climate-controlled storage units?",
    a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, praesentium.",
  },
  {
    q: "How long can I rent a storage unit?",
    a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, praesentium.",
  },
  {
    q: "Can I change the size of my storage unit if I need more space?",
    a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, praesentium.",
  },
  {
    q: "How do I pay for my storage unit?",
    a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, praesentium.",
  },
];

function Faq() {

    /* Tagit hjälp av AI för accordion */
    
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-flex">
          <div className="faq-left">
            <h4>FAQs</h4>
            <h3>Frequently Ask Questions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="faq-right">
            <div className="accordion" id="faq-accordion">
              {items.map((it, i) => {
                const expanded = openIndex === i;
                const headerId = `faq${i}-header`;
                const panelId = `faq${i}`;

                return (
                  <div className="accordion-item" key={i}>
                    <p className="accordion-header">
                      <button
                        className="accordion-toggle"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        id={headerId}
                        onClick={() =>
                          setOpenIndex(expanded ? -1 : i)
                        }
                      >
                        {it.q}
                        <span
                          className={`chev${expanded ? " rotated" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                    </p>

                    <div
                      id={panelId}
                      className="accordion-panel"
                      aria-labelledby={headerId}
                      hidden={!expanded}
                    >
                      <p>{it.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq