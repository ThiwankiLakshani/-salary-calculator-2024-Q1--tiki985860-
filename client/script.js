document.getElementById('calculate').addEventListener('click', async () => {
    const basicSalary = parseFloat(document.getElementById('basic-salary').value);
    const additionalIncome = parseFloat(document.getElementById('additional-income').value) || 0;

    if (isNaN(basicSalary) || basicSalary < 0) {
        alert('Please enter a valid basic salary.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ basicSalary, additionalIncome })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();

        document.getElementById('net-salary').textContent = result.netSalary.toFixed(2);
        document.getElementById('epf-deduction').textContent = result.epfDeduction.toFixed(2);
        document.getElementById('etf-deduction').textContent = result.etfDeduction.toFixed(2);
        document.getElementById('apit-deduction').textContent = result.apitDeduction.toFixed(2);
    } catch (error) {
        console.error('Error:', error);
    }
});
