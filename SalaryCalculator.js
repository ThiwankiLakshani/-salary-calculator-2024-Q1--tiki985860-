import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SalaryCalculator = () => {
  const [basicSalary, setBasicSalary] = useState(0);
  const [earnings, setEarnings] = useState([]);
  const [deductions, setDeductions] = useState([]);
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    fetchSalaries();
  }, []);

  const fetchSalaries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/salaries');
      setSalaries(response.data);
    } catch (error) {
      console.error("Error fetching salaries:", error);
    }
  };

  const saveSalary = async () => {
    try {
      const salaryDetails = {
        basicSalary,
        earnings,
        deductions,
      };
      const response = await axios.post('http://localhost:5000/api/salaries', salaryDetails);
      setSalaries([...salaries, response.data]);
      resetForm();
    } catch (error) {
      console.error("Error saving salary:", error);
    }
  };

  const deleteSalary = async (index) => {
    try {
      await axios.delete(`http://localhost:5000/api/salaries/${index}`);
      fetchSalaries();
    } catch (error) {
      console.error("Error deleting salary:", error);
    }
  };

  const updateEarning = (index, key, value) => {
    const updatedEarnings = [...earnings];
    updatedEarnings[index][key] = value;
    setEarnings(updatedEarnings);
  };

  const deleteEarning = (index) => {
    setEarnings(earnings.filter((_, i) => i !== index));
  };

  const updateDeduction = (index, key, value) => {
    const updatedDeductions = [...deductions];
    updatedDeductions[index][key] = value;
    setDeductions(updatedDeductions);
  };

  const deleteDeduction = (index) => {
    setDeductions(deductions.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setBasicSalary(0);
    setEarnings([]);
    setDeductions([]);
  };

  const calculateGrossEarning = () => earnings.reduce((acc, cur) => acc + cur.amount, 0);
  const calculateGrossDeduction = () => deductions.reduce((acc, cur) => acc + cur.amount, 0);
  const calculateEmployeeEPF = () => earnings.reduce((acc, cur) => acc + (cur.epf ? cur.amount * 0.08 : 0), 0);
  const calculateEmployerContribution = () => earnings.reduce((acc, cur) => acc + (cur.epf ? cur.amount * 0.12 : 0), 0);
  const calculateNetSalary = () => basicSalary + calculateGrossEarning() - calculateGrossDeduction() - calculateEmployeeEPF();

  return (
    <div className="container">
      <h1>Salary Calculator</h1>
      <form>
        <div className="form-group">
          <label>Basic Salary</label>
          <input
            type="number"
            className="form-control"
            value={basicSalary}
            onChange={(e) => setBasicSalary(parseFloat(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Earnings</label>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setEarnings([...earnings, { name: '', amount: 0, epf: false }])}
          >
            Add Earning
          </button>
          {earnings.map((earning, index) => (
            <div key={index} className="form-row">
              <input
                type="text"
                className="form-control"
                placeholder="Earning Name"
                value={earning.name}
                onChange={(e) => updateEarning(index, 'name', e.target.value)}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Amount"
                value={earning.amount}
                onChange={(e) => updateEarning(index, 'amount', parseFloat(e.target.value))}
              />
              <label>
                EPF Applicable
                <input
                  type="checkbox"
                  checked={earning.epf}
                  onChange={(e) => updateEarning(index, 'epf', e.target.checked)}
                />
              </label>
              <button type="button" className="btn btn-danger" onClick={() => deleteEarning(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="form-group">
          <label>Deductions</label>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setDeductions([...deductions, { name: '', amount: 0, epf: false }])}
          >
            Add Deduction
          </button>
          {deductions.map((deduction, index) => (
            <div key={index} className="form-row">
              <input
                type="text"
                className="form-control"
                placeholder="Deduction Name"
                value={deduction.name}
                onChange={(e) => updateDeduction(index, 'name', e.target.value)}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Amount"
                value={deduction.amount}
                onChange={(e) => updateDeduction(index, 'amount', parseFloat(e.target.value))}
              />
              <label>
                EPF Applicable
                <input
                  type="checkbox"
                  checked={deduction.epf}
                  onChange={(e) => updateDeduction(index, 'epf', e.target.checked)}
                />
              </label>
              <button type="button" className="btn btn-danger" onClick={() => deleteDeduction(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </form>
      <div>
        <h2>Salary Details</h2>
        <p>Gross Earnings: {calculateGrossEarning()}</p>
        <p>Gross Deductions: {calculateGrossDeduction()}</p>
        <p>Employee EPF: {calculateEmployeeEPF()}</p>
        <p>Net Salary: {calculateNetSalary()}</p>
        <p>Employer Contribution: {calculateEmployerContribution()}</p>
      </div>
      <button type="button" className="btn btn-success" onClick={saveSalary}>Save Salary</button>
      <button type="button" className="btn btn-secondary" onClick={resetForm}>Reset</button>
      <div>
        <h2>Saved Salaries</h2>
        {salaries.map((salary, index) => (
          <div key={index}>
            <p>Basic Salary: {salary.basicSalary}</p>
            <p>Earnings: {JSON.stringify(salary.earnings)}</p>
            <p>Deductions: {JSON.stringify(salary.deductions)}</p>
            <button type="button" className="btn btn-danger" onClick={() => deleteSalary(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryCalculator;
