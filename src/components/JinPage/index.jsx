import React, { useState } from "react";
import jin from "../../img/jin.jpg";
import RefContect from "./RefContect";
import CVHead from "./CVHead";
import { Button, Modal } from "@mui/material";
import CoverLetter from "./CoverLetter";

const imgStyle = {
  width: "200px",
  borderRadius: 20,
};
export const divStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

export const paddingRight = {
  paddingRight: "5%",
};

const JinPage = () => {
  const jingyuKang = {
    name: "JINGYU KANG",
    mobile: "021 116 9839",
    email: "jingyukang91@gmail.com",
    visa: "NZ RESIDENCE",
  };
  const refDetails = [
    {
      name: "BEN HUH",
      position: "Director",
      company: "Woopa Design Limited",
      mobile: "021 778 009",
    },
    {
      name: "PETER SON",
      position: "Lead Developer",
      company: "Woopa Design Limited",
      mobile: "021 565 621",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "60%" }}>
        <div className="dsb" style={divStyle}>
          <div>
            <img src={jin} alt="jin" style={imgStyle} />
          </div>
          <div style={{ textAlign: "center" }}>
            <div>
              <div>
                <h1>{jingyuKang.name}</h1>
              </div>
            </div>
            <div>
              <div>
                <h3>CURRICULUM VITAE</h3>
              </div>
            </div>
          </div>
          <div>
            <div style={divStyle}>
              <div style={paddingRight}>
                <b>Mobile</b>
              </div>
              <div style={{ textAlign: "right" }}>{jingyuKang.mobile}</div>
            </div>
            <div style={divStyle}>
              <div style={paddingRight}>
                <b>Email</b>
              </div>
              <div style={{ textAlign: "right" }}>{jingyuKang.email}</div>
            </div>
            <div style={divStyle}>
              <div style={paddingRight}>
                <b>Visa</b>
              </div>
              <div style={{ textAlign: "right" }}>{jingyuKang.visa}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <Button onClick={handleOpen} variant="outlined">
                Cover Letter
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <CoverLetter />
              </Modal>
            </div>
          </div>
        </div>
        <div className="dsb" style={divStyle}>
          <CVHead head="PERSONAL SUMMARY" />
          <div style={{ width: "80%" }}>
            I always try to think and act on the basis of principles. I accept
            other people's criticism as a different point of view and try to
            find new ways. I am passionate and eager to learn. Also, I have
            quick comprehension that takes less time to learn and quick to
            apply. Moreover, I try to develop that I have learned and apply it
            to my work to meet our needs. I want to be a good supporter and, I
            want to grow by learning while working.
          </div>
        </div>
        <div className="dsb" style={divStyle}>
          <CVHead head="EDUCATION" />
          <div style={{ width: "80%" }}>
            <div style={divStyle}>
              <div style={paddingRight}>
                <p>
                  <h3>BACHELOR OF COMPUTER AND INFORMATION SCIENCES</h3>
                </p>
                <p>AUCKLAND UNIVERCITY OF TECHNOLOGY (AUT), CITY CAMPUS</p>
                <div style={divStyle}>
                  <div>
                    <ul>
                      <li>Programming 2</li>
                      <li>Data and Process Modelling</li>
                      <li>Artificial intelligence</li>
                      <li>Mathematical Concepts</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Contemporary Information System</li>
                      <li>Computer Network Principles</li>
                      <li>Information Security Management</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3>2016</h3>
              </div>
            </div>
            <div style={divStyle}>
              <div>
                <p>
                  <h3>DIPLOMA IN INFORMATION TECHNOLOGY -LEVEL 6</h3>
                </p>
                <p>NEW ZEALAND SCHOOL OF EDUCATION, AUCKLAND</p>
                <div style={divStyle}>
                  <div>
                    <ul>
                      <li>Programming 1</li>
                      <li>Logical Database Design</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Operating System</li>
                      <li>Network and System Administration</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3>2014</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="dsb" style={divStyle}>
          <CVHead head="SKILLS" />
          <div>
            <h3>FRONTEND</h3>
            <ul>
              <li>ES6 / javascript</li>
              <li>ReactJS</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <h3>SOFTWARE & TOOL</h3>
            <ul>
              <li>Visual Studio</li>
              <li>Git / GitHub</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
        <div className="dsb" style={divStyle}>
          <CVHead head="WORK HISTORY" />
          <div>
            <p>
              <h3>
                WEB & APP DEVELOPMENT ASSISTANT – WOOPA DESIGN LTD, AUCKLAND NZ
              </h3>
            </p>
            <div>
              <ul>
                <li>
                  Providing assistance in developing web design solutions for
                  various clients
                </li>
                <li>Maintaining websites</li>
                <li>Developing communication skills</li>
              </ul>
            </div>
          </div>
          <div>
            <h3>2016 - 2017</h3>
          </div>
        </div>
        <div className="dsb" style={divStyle}>
          <CVHead head="LANGUAGE" />
          <div style={{ width: "50%" }}>
            <h3>KOREAN & ENGLISH</h3>
          </div>
        </div>
        <div className="dsb" style={divStyle}>
          <CVHead head="REFERENCES" />
          <div style={{ width: "80%" }}>
            {refDetails.map((p, i) => (
              <RefContect key={i} p={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JinPage;
