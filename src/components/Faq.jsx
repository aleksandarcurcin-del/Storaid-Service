import { useEffect, useState } from "react";
import "./Faq.css";

function Faq() {

    /* Tagit hjälp av AI för accordion */
    const [items, setItems] = useState([]);
    const [openIndex, setOpenIndex] = useState(-1);

    useEffect(() => {
    (async () => {
        const res = await fetch("https://win25-jsf-assignment.azurewebsites.net/api/faqs");
        const data = await res.json();
        setItems(data.map(it => ({ id: it.id, q: it.title, a: it.description })));
    })();
    }, []);

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
                                const headerId = `faq${it.id ?? i}-header`;
                                const panelId  = `faq${it.id ?? i}`;
                                return (
                                <div className="accordion-item" key={it.id ?? i}>
                                    <p className="accordion-header">
                                    <button
                                        className={`accordion-toggle${expanded ? " is-open" : ""}`}
                                        aria-expanded={expanded}
                                        aria-controls={panelId}
                                        id={headerId}
                                        onClick={() => setOpenIndex(expanded ? -1 : i)}
                                    >
                                        {it.q}
                                        <span className={`chev${expanded ? " rotated" : ""}`} aria-hidden="true" />
                                    </button>
                                    </p>

                                    <div
                                        id={panelId}
                                        className="accordion-panel"
                                        role="region"
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

export default Faq;