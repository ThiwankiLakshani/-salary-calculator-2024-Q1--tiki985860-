# -salary-calculator-2024-Q1--tiki985860-
# Salary Calculator React Application

A React application to calculate the net salary by factoring in various earnings, deductions, and contributions like EPF and ETF.

## Table of Contents

# Salary Calculator

A React application for calculating net salary, considering various earnings, deductions, and contributions such as EPF and ETF.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Details](#project-details)
- [Contributing](#contributing)
- [License](#license)

## Demo

[Live Demo](https://your-demo-link.com)

## Features

- **Basic Salary Input:** Enter the basic salary amount.
- **Dynamic Earnings and Deductions:** Add, update, and delete multiple earnings and deductions.
- **EPF/ETF Checkbox:** Toggle EPF/ETF applicability for each earning or deduction.
- **Real-time Calculation:** Automatically calculates and displays:
  - Gross Earnings
  - Gross Deductions
  - Employee EPF Contribution
  - APIT (Annual Personal Income Tax)
  - Net Salary (Take Home)
  - Employer Contribution
- **Reset Functionality:** Clear all inputs to start a new calculation.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https:https://github.com/tiki985860/-salary-calculator-2024-Q1--tiki985860-.git
   
### Usage
Basic Salary Input
Enter Basic Salary in the input field.
Managing Earnings and Deductions
Add Earnings/Deductions:

Click the "Add Earning" or "Add Deduction" button.
Fill in the details (name, amount, and EPF/ETF applicability).
Update Earnings/Deductions:

Edit the fields directly to update name, amount, or EPF/ETF applicability.
Delete Earnings/Deductions:

Click the "Delete" button next to the earning or deduction you want to remove.
Automatic Calculation
Changes in inputs automatically recalculate the salary details and update the display in real-time.
Reset Inputs
Click the "Reset" button to clear all inputs and start a fresh calculation.

### Project Details

UI Structure

Components:

SalaryForm: Main form for inputting Basic Salary, Earnings, and Deductions.
EarningDeductionForm: Form for adding/updating earnings and deductions.
SalaryDetails: Component to display calculated salary details.

State Management

useState is used to manage state for basic salary, earnings, and deductions.

Calculation Logic

Gross Earnings: Sum of all earnings.
Gross Deductions: Sum of all deductions.
Employee EPF Contribution: Calculated based on applicable earnings and deductions.
APIT: Calculated based on gross earnings and other factors.
Net Salary: Calculated as basic salary plus gross earnings minus gross deductions.
Employer Contribution: Calculated based on applicable rules.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request. Follow the Contributing Guidelines for more information.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Developed by P.S.A.T Lakshani


   
