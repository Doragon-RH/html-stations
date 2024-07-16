async function getData() {
  const userList = [
    {
      id: 1,
      first_name: "優",
      family_name: "大木",
      affiliation: "TechTrain",
      is_student: false,
    },
    {
      id: 2,
      first_name: "太郎",
      family_name: "山田",
      affiliation: "HogeHoge大学",
      is_student: true,
    },
  ];
  const result = await test(userList);
  return result;
}

function test(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // データから氏名を抽出
      const names = data.map((user) => ({
        full_name: user.family_name + " " + user.first_name,
      }));
      resolve(names);
    }, 3000);
  });
}
