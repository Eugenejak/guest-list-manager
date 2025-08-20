class FamilyMember {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const familyMembers = [];

function submitFamilyMember() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");
  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;
  const familyMember = new FamilyMember(name, age, gender);
  familyMembers.push(familyMember);
  reloadFamilyMembers();
}

function reloadFamilyMembers() {
  const familyList = document.getElementById("familyMembers").tBodies[0];
  familyList.innerHTML = " ";

  for (let i=0; i < familyMembers.length; i++) {
    const familyMember = familyMembers[i];

    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${familyMember.name}</td>
    <td>${familyMember.age}</td>
    <td>${familyMember.gender}</td>
    <td>
    <button onclick="addAge(${i})">Add Age</button>
    <button id="change" onclick="changeName(${i})">Change Name</button>
    </td>
    `;

    familyList.appendChild(row);  
  };
}

function addAge(i) {
  familyMembers[i].age++;
  reloadFamilyMembers();
}

function changeName(i) {
  const newName = prompt("Enter new name: ", familyMembers[i].name);
  if (newName && newName.trim() !== "") {
    familyMembers[i].name = newName.trim();
    reloadFamilyMembers();
  }
}