// src/JobApplicationForm.js
// src/JobApplicationForm.js
import React, { useState } from "react";
import "./App.css";

const JobApplicationForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        gender: "",
        email: "",
        phone: "",
        photo: null,
        university: "",
        collegeName: "",
        rollNo: "",
        address: "",
        password: "",
        confirmPassword: "",
        department: "",
        otherDepartment: "", // For "Others" option
        resume: null,
    });

    const departments = ["Engineering", "Marketing", "Finance", "HR", "Operations", "Others"];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/api/applications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                alert("Application submitted successfully!");
            } else {
                alert("Failed to submit application.");
            }
        } catch (error) {
            console.error("Error submitting application:", error);
        }
    };
    
    return (
        <div className="form-container">
            <h2>Job Application Form</h2>
            <form onSubmit={handleSubmit}>
                {/* First Name */}
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>

                {/* Middle Name */}
                <div className="form-group">
                    <label>Middle Name:</label>
                    <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
                </div>

                {/* Last Name */}
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>

                {/* Date of Birth */}
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                </div>

                {/* Gender */}
                <div className="form-group">
                    <label>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Email */}
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                {/* Phone Number */}
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>

                

                {/* University */}
                <div className="form-group">
                    <label>University:</label>
                    <input type="text" name="university" value={formData.university} onChange={handleChange} required />
                </div>

                {/* College Name */}
                <div className="form-group">
                    <label>College Name:</label>
                    <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required />
                </div>

                {/* Roll Number */}
                <div className="form-group">
                    <label>Roll Number:</label>
                    <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} required />
                </div>

                {/* Address */}
                <div className="form-group">
                    <label>Address:</label>
                    <textarea name="address" value={formData.address} onChange={handleChange} required />
                </div>

                {/* Password */}
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                {/* Confirm Password */}
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>

                {/* Department */}
                <div className="form-group">
                    <label>Department:</label>
                    <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Department</option>
                        {departments.map((dept, index) => (
                            <option key={index} value={dept}>{dept}</option>
                        ))}
                    </select>
                </div>

                {/* Other Department (conditionally rendered) */}
                {formData.department === "Others" && (
                    <div className="form-group">
                        <label>Specify Department:</label>
                        <input
                            type="text"
                            name="otherDepartment"
                            value={formData.otherDepartment}
                            onChange={handleChange}
                            placeholder="Please specify your department"
                            required
                        />
                    </div>
                )}

               

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default JobApplicationForm;

