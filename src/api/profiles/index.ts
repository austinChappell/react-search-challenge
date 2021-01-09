// using this mock an API delay
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchProfiles = async (isFiltered: boolean) => {
  await sleep(500);

  const baseUrl = window.location.origin;

  const response = await fetch(`${baseUrl}/profiles.json`);

  const profiles: Profile[] = await response.json();

  return isFiltered ? profiles.filter(({ age }) => age < 30) : profiles;
};
