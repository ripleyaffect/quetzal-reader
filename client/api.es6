import {
  DUMMY_BOOKS,
  DUMMY_PAGES,
} from 'app/dummyData'

export const getBooks = (callback) => {
  setTimeout(() => callback(DUMMY_BOOKS), 500)
}

export const getBookPages = (bookId, callback) => {
  const pages = DUMMY_PAGES.filter(page => page.bookId === bookId)
  setTimeout(() => callback(pages), 500)
}