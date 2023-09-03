let currentCategory = null;

function toggleDetails(categoryId) {
  // すべての詳細リストを非表示にする
  const detailsLists = document.querySelectorAll('.details');
  detailsLists.forEach(list => list.style.display = 'none');

  if (currentCategory !== categoryId) {
    // 選択されたカテゴリーの詳細リストを表示する
    const detailsList = document.getElementById(categoryId);
    if (detailsList) {
      detailsList.style.display = 'block';
    }
    currentCategory = categoryId;
  } else {
    currentCategory = null;
  }
}
