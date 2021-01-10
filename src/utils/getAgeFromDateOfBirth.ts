export const getAgeFromDateOfBirth = (dateOfBirth?: string) => {
  if (!dateOfBirth) {
    return null;
  }

  const dob = new Date(dateOfBirth);

  const ageDiffInMilliseconds = Date.now() - dob.getTime();
  const ageDate = new Date(ageDiffInMilliseconds);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
