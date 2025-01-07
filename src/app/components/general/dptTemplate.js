"use client"

export default function dptTemplate (x) {
    
    const result = []
    for (let i of x) {
        const dep = i.code+" - "+i.dep_name
        result.push(dep)
    }
    return result
}