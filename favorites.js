// 즐겨찾기 목록을 가져오거나 새로 생성합니다.
const getFavorites = () => {
  return JSON.parse(localStorage.getItem('favoriteCafes') || '[]');
};

// 즐겨찾기를 토글(추가/삭제)합니다.
const toggleFavorite = (cafeId) => {
  let favorites = getFavorites();
  const cafeIndex = favorites.indexOf(cafeId);

  if (cafeIndex === -1) {
    favorites.push(cafeId);
  } else {
    favorites.splice(cafeIndex, 1);
  }
  localStorage.setItem('favoriteCafes', JSON.stringify(favorites));
  return cafeIndex === -1;
};

// 특정 카페가 즐겨찾기 상태인지 확인합니다.
const isFavorite = (cafeId) => {
  return getFavorites().includes(cafeId);
};