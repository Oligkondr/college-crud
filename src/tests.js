const clients = [
  {
    'name': 'Арсений',
    'surname': 'Сорокин',
    'lastName': 'Георгиевич',
    'contacts': [
      {
        'type': 'email',
        'value': 'ars@mail.ru'
      },
      {
        'type': 'phone',
        'value': '7916482000'
      }
    ],
    'id': '1734025475338',
    'updatedAt': '2024-12-12T17:44:35.338Z',
    'createdAt': '2024-12-12T17:44:35.338Z'
  },
  {
    'name': 'Анастасия',
    'surname': 'Балашова',
    'lastName': 'Матвеевна',
    'contacts': [
      {
        'type': 'vk',
        'value': 'beautiNastyaVK'
      },
      {
        'type': 'phone',
        'value': '7985173438'
      }
    ],
    'id': '1734025543061',
    'updatedAt': '2024-12-12T17:45:43.061Z',
    'createdAt': '2024-12-12T17:45:43.061Z'
  },
  {
    'name': 'Лидия',
    'surname': 'Гончарова',
    'lastName': 'Давидовна',
    'contacts': [
      {
        'type': 'other',
        'value': 'lidia.other.com'
      }
    ],
    'id': '1734025577606',
    'updatedAt': '2024-12-12T17:46:17.606Z',
    'createdAt': '2024-12-12T17:46:17.606Z'
  },
  {
    'name': 'Валерия',
    'surname': 'Давыдова',
    'lastName': 'Елисеевна',
    'contacts': [],
    'id': '1734025590175',
    'updatedAt': '2024-12-12T17:46:30.175Z',
    'createdAt': '2024-12-12T17:46:30.175Z'
  },
  {
    'name': 'Екатерина',
    'surname': 'Зайцева',
    'lastName': 'Павловна',
    'contacts': [
      {
        'type': 'phone',
        'value': '79816970934'
      },
      {
        'type': 'email',
        'value': 'eca1@mail.ru'
      },
      {
        'type': 'email',
        'value': 'eca2@mail.ru'
      },
      {
        'type': 'facebook',
        'value': 'faceEka'
      },
      {
        'type': 'vk',
        'value': 'vkEka'
      },
      {
        'type': 'other',
        'value': 'eca.com'
      },
      {
        'type': 'other',
        'value': 'oher1'
      },
      {
        'type': 'phone',
        'value': '7916103983'
      },
      {
        'type': 'other',
        'value': 'oher3'
      },
      {
        'type': 'other',
        'value': 'oher4'
      }
    ],
    'id': '1734025711536',
    'updatedAt': '2024-12-13T06:11:37.679Z',
    'createdAt': '2024-12-12T17:48:31.536Z'
  }
]

// const dataTest = new Date('2024-02-05T07:08:31.536Z')
// console.log(dataTest.getMonth())
// console.log(dataTest.getDate())
// console.log(dataTest.getMinutes() < 10 ? `0${dataTest.getMinutes()}` : dataTest.getMinutes())
// console.log(dataTest.getM() < 10 ? `0${dataTest.getMinutes()}` : dataTest.getMinutes())

const generateDateStr = (dateStr, type = 'data') => {
  const normalize = (date) => {
    return date < 10 ? `0${date}` : date
  }

  const dateObj = new Date(dateStr)

  if (type === 'time') {
    const hours = dateObj.getHours()
    const minutes = dateObj.getMinutes()
    return `${normalize(hours)}:${normalize(minutes)}`
  }

  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  return `${year}-${normalize(month)}-${normalize(day)}`
}

console.log(generateDateStr('2024-02-05T07:08:31.536Z'))
console.log(generateDateStr('2024-02-05T07:08:31.536Z', 'time'))
