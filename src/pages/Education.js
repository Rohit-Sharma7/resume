import React from 'react'
import Header from '../components/Header'

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              EDUCATION
            </h1>
            <br></br>
            <p class="lead mb-5">
            <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Qualification</th>
      <th scope="col">INSTITUTE</th>
      <th scope="col">BOARD/UNIVERSITY</th>
      <th scope="col">YEAR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">BCA</th>
      <td>Sinhgad College of Commerce </td>
      <td>Savitribai Phule Pune University</td>
      <td>2021</td>
    </tr>
    <tr>
      <th scope="row">HSC</th>
      <td>Moledina Jr. College</td>
      <td>Maharashtra State Board</td>
      <td>2017</td>
    </tr>
    <tr>
    <th scope="row">SSC</th>
      <td>Basant High School</td>
      <td>Maharashtra State Board</td>
      <td>2015</td>
    </tr>
  </tbody>
</table>
<br></br>

<hr />
<h2 class="mb-5">Certification Course</h2>
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Courses</th>
      <th scope="col">INSTITUTE</th>
      <th scope="col">YEAR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Full Stack Development</th>
      <td>BOARD INFINITY</td>
      <td>2021</td>
    </tr>
    <tr>
      <th scope="row">Web Development</th>
      <td>E-Lite Softwares</td>
      <td>2019</td>
    </tr>
    </tbody>  
    </table>

            </p>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Academic Project Work</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              
            <div>
              <h3>PHARMACY MANAGEMENT SYSTEM</h3>
              <br></br>
              <h4>Programming Language -<span><h3>Visual Basic 6.0</h3></span></h4>
              </div>
              <br></br>
            </div>
            <h4>OBJECTIVES -</h4>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-angle-right"></i>
                </span>
                To maintain the details of Medicine like its prices and stocks. And also, the details of each supplier who supplies Medicines and to pay suppliers bill within a time.
              </li>

              <li>
                <span class="fa-li">
                  <i class="fas fa-angle-right"></i>
                </span>
                To provide less amount of human efforts in calculating bill and maintain customer's details.
              </li>

              <li>
                <span class="fa-li">
                  <i class="fas fa-angle-right"></i>
                </span>
                Hence to provide proper maintains records of all the medicine along with their price and availability information so there would be systematic way of maintenance of Medicine.
              </li>

              <li>
                <span class="fa-li">
                  <i class="fas fa-angle-right"></i>
                </span>
                It generates Data Reports of Sales and Purchase.
              </li>

              </ul>
          </div>
        </section>
        <hr class="m-0" />
        
      </div>
    </>
  )
}

export default Education
