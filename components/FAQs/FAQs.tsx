"use client";
import React from "react";
import "./Faqs.css";
import { MdArrowForwardIos } from "react-icons/md";
import { BsRecordCircle } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useState, useRef } from "react";

const data = [
  {
    id: 1,
    heading: "How does it work?",
    desc: [
      "After signing up as a vendor, you'll have access to your own personalized dashboard where you can manage your products, orders, and track your sales performance.",
      "You can start by listing your products, setting prices, uploading images, and providing detailed descriptions. The platform connects your store with potential buyers, and orders placed by customers will be visible on your dashboard. From there, you can process orders, update shipping status, and manage inventory.",
      "Additionally, you can invite team members to help manage your store, such as handling customer inquiries or updating product listings.",
    ],
  },
  {
    id: 2,
    heading: "How many products can I list?",
    desc: [
      "The number of products you can list depends on the subscription plan you choose. Each plan offers a different set of features and limits.",
      "For example, the Basic plan allows you to list up to 50 products, while the Premium plan supports up to 500 products, including additional features like advanced analytics and marketing tools to help boost your sales.",
      "You can also categorize your products into different types such as physical goods, digital downloads, or services, depending on what you offer.",
    ],
  },
  {
    id: 3,
    heading: "What if I receive negative feedback on my products?",
    desc: [
      "As a vendor, customer satisfaction is important. If you receive negative feedback, we encourage you to address the issue by offering customer support, refunds, or product exchanges where applicable.",
      "The platform also provides a review system that allows customers to share their experiences, and you can respond to feedback directly to resolve any concerns.",
    ],
  },
  {
    id: 4,
    heading: "Can I cancel my subscription at any time?",
    desc: [
      "Yes, you can cancel your vendor subscription at any time. There are no long-term contracts, and you can resume your subscription whenever you're ready to start selling again.",
    ],
  },
];

function FAQs() {
  // const [click, setClick] = useState(false);
  const [click, setClick] = useState<any>({});
  // const onClick = () => setClick(!click);
  const [setHeight, setHeightState] = useState<string>("0px");
  const handleClick = (index: number) => () => {
    setClick((state: any) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };
  const content = useRef(null);
  function toggleAccordion() {
    // onClick();
    // setHeightState();
    // click === true ? "0px" : `${content.current.scrollHeight}px`
    // console.log(content.current.scrollHeight);
  }
  return (
    <>
      <div className="faq_section mt-12">
        <div className="faq_wrapper">
          <h2 className="text-3xl text-blue-900">Frequently Asked Questions</h2>
          {data.map((item, index: number) => (
            <div
              className={
                click[index] ? "faq_container active" : "faq_container  "
              }
              onClick={handleClick(index)}
              key={item.id}
              // style={{ height: click ? "300px" : "100px" }}
            >
              <div className="faq_row">
                <h3 className="text-xl">{item.heading}</h3>
                <div className="centerClass rounded text-white icon_wrapper">
                  {/* {click ? ( */}

                  <IoIosArrowDropdownCircle
                    style={{
                      // fontSize: "2em",
                      opacity: click[index] ? "1" : "0",
                    }}
                    className={
                      click[index] ? "faq_icon text-3xl " : "faq_icon active2"
                    }
                    // key={item.heading}
                  />
                  {/* ) : ( */}
                  <MdArrowForwardIos
                    className={
                      click[index] ? "faq_icon active text-3xl" : "faq_icon"
                    }
                    // key={item.heading}
                  />
                  {/* )} */}
                </div>
              </div>
              {/* <div className="faq_body"></div> */}
              {click[index] &&
                item.desc.map((des) => (
                  <div
                    // ref={content}
                    // style={{ maxHeight: `${setHeight}` }}
                    className="accordian_content"
                    key={des}
                  >
                    <BsRecordCircle
                      className="g_icon"
                      style={{ color: "var(--red)" }}
                    />
                    <p style={{ alignContent: "center" }}>{des}</p>
                  </div>
                ))}
            </div>
          ))}

          {/* <Pricingcontact heading="Ready to take your startup content game to the next level?" /> */}
        </div>
      </div>
    </>
  );
}

export default FAQs;
