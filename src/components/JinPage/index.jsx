import React, { useState } from "react";
import jin from "../../img/jin.jpg";
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

const widthStyle = {
  width: "30%",
};

const JinPage = () => {
  const jingyuKang = {
    name: "JINGYU KANG",
    mobile: "82)10 2987 7188",
    email: "jingyukang91@gmail.com",
    visa: "NZ RESIDENCE",
  };

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
                <h4>CURRICULUM VITAE</h4>
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
            {/* <div style={{ textAlign: "right" }}>
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
            </div> */}
          </div>
        </div>
        <div style={divStyle}>
          <div className="dsb" style={widthStyle}>
            <CVHead head="SKILLS" />
            <ul>
              <li>ES6 / TypeScript</li>
              <li>ReactJS / Redux</li>
              <li>Node.js</li>
              <li>Git / GitHub</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Postman</li>
              <li>Java</li>
              <li>New Relic</li>
              <li>Sumo Logic</li>
            </ul>
          </div>
          <div>
            <div className="dsb" style={divStyle}>
              <CVHead head="PERSONAL SUMMARY" />
              <div style={{ width: "90%" }}>
                Proactive and collaborative team player who is fast-learning and
                has an eye for detail. Highly motivated and passionate about
                developing new skills and expanding technical knowledge.
              </div>
            </div>

            <div className="dsb" style={divStyle}>
              <CVHead head="EXPERIENCE" />
              <div style={{ width: "90%" }}>
                <div style={divStyle}>
                  <div style={paddingRight}>
                    <p>
                      <h4>BADMINTON RANDOM TEAM GENERATOR</h4>
                    </p>
                    <p>
                      In a private team for using in badminton groups. It is a
                      web app that randomly balanced matches the game by setting
                      the number of courts, participating members, level of each
                      member, and others.
                    </p>
                  </div>
                  <div>
                    <h4>2021</h4>
                  </div>
                </div>
                <div style={divStyle}>
                  <div style={paddingRight}>
                    <p>
                      <h4>SELFE PROJECT</h4>
                    </p>
                    <p>Simple web practice uploaded on Github</p>
                    <ul>
                      <li>ReactJS practice</li>
                      <li>Connection with mongodb</li>
                      <li>CRUD able posting page</li>
                    </ul>
                  </div>
                  <div>
                    <h4>2021</h4>
                  </div>
                </div>
                <div style={divStyle}>
                  <div style={paddingRight}>
                    <p>
                      <h4>MILITARY SERVICE IN KOREA (2 YEARS 4 MONTHS)</h4>
                    </p>
                  </div>
                  <div>
                    <h4>2018-2020</h4>
                  </div>
                </div>
                <div style={divStyle}>
                  <div>
                    <p>
                      <h4>
                        DEVELOPMENT ASSISTANT – WOOPA DESIGN LTD, AUCKLAND NZ
                      </h4>
                    </p>
                    <ul>
                      <li>
                        Configure a basic website construction according to a
                        given design and apply it responsively
                      </li>
                      <li>
                        Monitoring dashboard and fix errors to maintain websites
                      </li>
                      <li>Developing communication skills</li>
                    </ul>
                  </div>
                  <div>
                    <h4>2016-2017</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="dsb" style={divStyle}>
              <CVHead head="EDUCATION" />
              <div style={{ width: "80%" }}>
                <div style={divStyle}>
                  <div style={paddingRight}>
                    <p>
                      <h4>BACHELOR OF COMPUTER AND INFORMATION SCIENCES</h4>
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
                    <h4>2016</h4>
                  </div>
                </div>
                <div style={divStyle}>
                  <div>
                    <p>
                      <h4>DIPLOMA IN INFORMATION TECHNOLOGY -LEVEL 6</h4>
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
                    <h4>2014</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="dsb" style={divStyle}>
              <CVHead head="LANGUAGE" />
              <div style={{ width: "50%" }}>
                <h4>KOREAN & ENGLISH</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JinPage;
