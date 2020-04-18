const { readFile, writeFile } = require('fs')
const path = require('path')
const prompts = require('prompts')
const YAML = require('yaml')

const { promisify } = require('util')

async function loadAuthors() {
  const authorsYaml = await promisify(readFile)(
    path.join(__dirname, '..', 'data', 'authors', 'authors.yml'),
    { encoding: 'utf8' }
  )

  const parsedAuthors = YAML.parse(authorsYaml)

  return new Map(
    parsedAuthors.map(authorEntry => [authorEntry.id, authorEntry])
  )
}

function filenamify(str) {
  return str.toLowerCase().replace(/[^\w]/g, '_')
}

async function createPost(author, title) {
  const now = new Date()

  const text = `
---
title: '${title}'
date: '${now.toISOString()}'
author: '${author}'
---

Hello World!

This is a blog post
`.trimLeft()

  const fileName = filenamify(title) + '.mdx'
  const outFile = path.join(
    __dirname,
    '..',
    'content',
    'posts',
    author,
    fileName
  )

  await promisify(writeFile)(outFile, text)

  return outFile
}

async function main() {
  const authors = await loadAuthors()
  const { title, author } = await prompts([
    {
      type: 'text',
      name: 'title',
      message: 'Post title:',
      initial: 'My New Post',
    },
    {
      type: 'text',
      name: 'author',
      message: 'Author',
      initial: process.env.USER,
    },
  ])

  if (!authors.has(author)) {
    console.error(
      `Could not find ${author} under registered authors in 'data/authors/authors.yml'`
    )
    console.log('Please add your author info first')

    process.exit(1)
  }

  const createdFile = await createPost(author, title)
  console.log(`Post created at ${createdFile}`)
}

main()
