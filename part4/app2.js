const Alex = {
  height: 1.75,
  weight: 75,
};

const Brain = {
  height: 1.82,
  weight: 82,
};

const BMI = (name) => {
  const bmi = name.weight / (name.height * name.height);
  return bmi;
};

const alexBMIHigher = BMI(Alex) >= BMI(Brain);

console.log(alexBMIHigher); // false
