import React from 'react'
import { useState, useEffect } from "react"
import Link from "next/link"
import { getCategories } from "../services"

function Categories() {

  const [categories, setCatagories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCatagories(newCategories)
    })
  }, [])


  console.log(categories, "i am categories")



  return (
    <div className="bg-gray-200 text-black shadow-lg rounded-lg p-4 my-4 ">
      <h3 className="text-xl text-white text-center bg-gray-800 rounded-lg m-4 font-semibold p-4 uppercase">
        Katogories
      </h3>

      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug} `}>
          <span className="cursor-pointer border-b py-3 font-semibold border-blue-500  block  "
          >{category.name}

          </span>
        </Link>

      ))}
    </div>
  )
}

export default Categories