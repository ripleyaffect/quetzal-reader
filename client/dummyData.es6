
export const PAGES_BY_BOOK_ID = {
  1: [
    {
      bookId: 1,
      id: 1,
      title: 'Hello World',
    },
    {
      bookId: 1,
      id: 4,
      title: 'Hello World two',
    },
    {
      bookId: 1,
      id: 7,
      title: 'Hello World three',
    },
  ],
  2: [
    {
      bookId: 2,
      id: 2,
      title: 'Beginning Again',
    },
    {
      bookId: 2,
      id: 5,
      title: 'Beginning Again two',
    },
    {
      bookId: 2,
      id: 8,
      title: 'Beginning Again three',
    },
  ],
  3: [
    {
      bookId: 3,
      id: 3,
      title: 'Pants on Fire',
    },
    {
      bookId: 3,
      id: 6,
      title: 'Pants on Fire two',
    },
    {
      bookId: 3,
      id: 9,
      title: 'Pants on Fire three',
    }
  ]
}

export const DUMMY_BOOKS = [
  {
    id: 1,
    title: 'A Short History of Short Histories',
    activePageId: 1,
    pageIds: PAGES_BY_BOOK_ID[1].map(p => p.id),
    color: '#f77',
  },
  {
    id: 2,
    title: 'JavaScript for People that Hate Themselves',
    activePageId: 2,
    pageIds: PAGES_BY_BOOK_ID[2].map(p => p.id),
    color: '#7f7',
  },
  {
    id: 3,
    title: 'Riding the Megabus for Dummies',
    activePageId: 3,
    pageIds: PAGES_BY_BOOK_ID[3].map(p => p.id),
    color: '#77f',
  },
]
