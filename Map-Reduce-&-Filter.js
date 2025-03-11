const companies = [
    { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn:1983},
    { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn:1975 },
    { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn:1968 },
    { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn:2004 },
    { name: "Spotify", marketValue: 50, CEO: "Daniel Ek", foundedOn:2006 },
    { name: "Apple", marketValue: 245, CEO: "Tim Cook", foundedOn:1976 }
]

//adicionar 10% de valor de mercado a todoas as companhias -> MAP
// FIltar somente companhias fundadas depois de 1990 - FILTER
// Somar o valor de mercado de todas as companhias - REDUCE

const add10Percentes = (company) => {

    company.marketValue = company.marketValue + (company.marketValue / 10)
    return company

}

const filterCompanies = (company) =>  {
    return company.foundedOn < 1990
}

const reduceCompanies = (acc, company) => acc + company.marketValue



const marketValueOldCompanies = companies
.map (add10Percentes)
.filter(filterCompanies)
.reduce(reduceCompanies,0)

console.log(marketValueOldCompanies)


// desafio 2

const remove10Percentes = (company) => {

    company.marketValue = company.marketValue - (company.marketValue / 10)
    return company

}

const filterCompanies1980 = (company) =>  {
    return company.foundedOn < 1980
}

const companistotal = (acc, company) => acc + company.marketValue



const marketValueOldCompaniesResto = companies
.map (remove10Percentes)
.filter(filterCompanies)
.reduce(reduceCompanies,0)

console.log(marketValueOldCompaniesResto)