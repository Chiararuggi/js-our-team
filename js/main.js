const teamMember = [
    {
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
    },
    {
        name: "Angela",
        surname: "Caroll",
        role: "Chief Editor",
    },
    {
        name: "Walter",
        surname: "Gordon",
        role: "Office Manager",
    },
    {
        name: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
    },
    {
        name: "Scott",
        surname: "Estrada",
        role: "Developer",
    },
    {
        name: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
    },

];

for (let i = 0; i < teamMember.length; i++) {

    for(let chiave in teamMember[i]) {
        console.log(`Nome: ${teamMember[i].name} - Cognome: ${teamMember[i].surname} - Eta: ${teamMember[i].role}`);
    }
}