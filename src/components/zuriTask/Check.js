import React, { useState, useEffect } from "react";

function Check() {
  return (
    <div>
      <nav>
        <div className="left">
          <img src="" alt="logo-picture" />
        </div>
        <div className="middle">
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Features</li>
            <li>Features</li>
            <li>Features</li>
          </ul>
        </div>
        <div className="right flex gap-8">
          <button className="px-7 py-5 rounded-lg bg-white font-semibold text-blue-700 border-2 border-blue-700 ">
            Sign-Up
          </button>
          <button className="bg-blue-700 px-7 py-5 rounded-lg font-semibold text-white">
            Register
          </button>
        </div>
      </nav>

      <main className="flex">
        <div className="text">
          <h1>Create a Job-Landing Cover Letter in seconds</h1>
          <p>100% Automated and Free</p>
        </div>
        <div className="shape"></div>
      </main>


      <main>
        <div className="left">
          <h2>Upload your CV/Resume to make a Cover Letter</h2>
          <p>
            Maximum file size is 10MB, and you can only upload a maximum of 1
            file per upload session
          </p>
        </div>
        <div className="right">
          <div className="uploadContainer">
            <input type="file" className="upload_file" id="" />
            <label for="upload_file" className="">
              <img src="" alt="" />
              <h3>Drag & Drop to Upload </h3>
              <p>File Supported PDF</p>
              <button className="">Or browse</button>
            </label>
          </div>
        </div>
      </main>

      <h2>
        Follow These Steps to Seamlessly Create Your Cover Letters
      </h2>

    <div className="additional_info_container">

      <div className="additional_info">
        <img src="" alt="" />
        <span>Upload Your CV or Resume</span>
      </div>
      <div className="additional_info">
        <img src="" alt="" />
        <span>Input Additional Information</span>
      </div>
      <div className="additional_info">
        <img src="" alt="" />
        <span>Generate Your Cover Letter</span>
      </div>
      <div className="additional_info">
        <img src="" alt="" />
        <span>Download or Save</span>
      </div>
      </div>

        <main>
            <h2>Benefits of Using Our COver Letter Builder</h2>
            <div className="top">
                <div className="a">
                    <img src="" alt="" />
                    <p>Make Your Job Search Easy</p>
                    <span>Applying for multiple jobs means writing multiple cover letters. Our Cover Letter Builder makes it quick and easy to customize cover letters, regardless of how many you write.
                        
                    </span>
                </div>
            </div>
        </main>

    </div>
  );
}

export default Check;
