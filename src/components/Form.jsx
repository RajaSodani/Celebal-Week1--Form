import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const countries = ["India", "USA", "Canada", "Australia"]; 
const cities = {
  India: ["Mumbai", "Delhi", "Bangalore"],
  USA: ["New York", "Los Angeles", "Chicago"],
  Canada: ["Toronto", "Vancouver", "Montreal"],
  Australia: ["Sydney", "Melbourne", "Brisbane"],
};
const countryCode = {
    India : "+91",
    USA: "+1",
    Canada:"+1",
    Australia:"+61",
}

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    countryCode:'',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone No. is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'Pan No. is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar No. is required';
    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (isFormValid) {
      navigate('/success', { state: { formData } });
    }
  };

  useEffect(() => {
    validateForm();
  }, [formData]);
  return (
    <div class='main-div' >
        <form onSubmit={handleSubmit}>
        <div>
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div>
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
            <label>Username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
            {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
            <label>Password:</label>
            <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
            </button>
            {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
            <label>Country:</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} list="country-list" />
            <datalist id="country-list">
            {countries.map((country) => ( <option key={country} value={country} /> ))}
            </datalist>
            {errors.country && <span>{errors.country}</span>}
        </div>
        <div>
            <label>City:</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} list="city-list" disabled={!formData.country}/>
            <datalist id="city-list">
            {formData.country && cities[formData.country] && cities[formData.country].map((city) => ( <option key={city} value={city} />))}
            </datalist>
            {errors.city && <span>{errors.city}</span>}
        </div>
        <div>
            <label>Phone No.:</label>
            <input type="text" name="countryCode" class="code" value={ formData.countryCode = countryCode[formData.country]} onChange={handleChange} disabled={!formData.country} />
            <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
            {errors.phoneNo && <span>{errors.phoneNo}</span>}
        </div>
        <div>
            <label>PAN : </label>
            <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
            {errors.panNo && <span>{errors.panNo}</span>}
        </div>
        <div>
            <label>Aadhar: </label>
            <input type="number" name="aadharNo" value={formData.aadharNo} onChange={handleChange} size={10}/>
            {errors.aadharNo && <span>{errors.aadharNo}</span>}
        </div>
        <button type="submit" disabled={!isFormValid && FormData.length==0}>
            Submit
        </button>
        </form>
    </div>
  );
};

export default Form;
