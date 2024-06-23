function calculateSalary(req, res) {
    const { basicSalary, additionalIncome } = req.body;

    const epfDeduction = basicSalary * 0.12;
    const etfDeduction = basicSalary * 0.03;
    const totalIncome = basicSalary + additionalIncome;
    const apitDeduction = totalIncome * 0.05;

    const netSalary = totalIncome - epfDeduction - etfDeduction - apitDeduction;

    res.json({
        netSalary,
        epfDeduction,
        etfDeduction,
        apitDeduction
    });
}

module.exports = { calculateSalary };
