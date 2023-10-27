export async function fetchTabs() {
  try {
    const response = await fetch('/tabs.json');
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch tabs', error);
    throw error;
  }
}
