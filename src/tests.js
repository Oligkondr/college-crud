const clients = [
  {
    surname: 'Соколова',
    name: 'Наталья',
    lastName: 'Платоновна',
    contacts: [
      {
        type: 'phone',
        value: '+79160134993'
      }
    ],
    id: 101
  },
  {
    surname: 'Макарова',
    name: 'Серафима',
    lastName: 'Алексеевна',
    contacts: [
      {
        type: 'phone',
        value: '+79160134993'
      }
    ],
    id: 102
  },
  {
    surname: 'Михайлов',
    name: 'Руслан',
    lastName: 'Никитич',
    contacts: [
      {
        type: 'phone',
        value: '+79160134993'
      }
    ],
    id: 103
  }
]

const search = 'Руслан '

const sortBy = () => {
  return clients.filter((client) => {
    const fullName = `${client.lastName} ${client.name} ${client.surname}`
    console.log(fullName)
    return fullName.toLowerCase().includes(search.toLowerCase())
  })
}

console.log(sortBy())

// const fullName = "Михайлов Руслан Никитич";
// let res = fullName.includes("Рус");
// console.log(res);

