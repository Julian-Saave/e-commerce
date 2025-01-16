import { useState, createContext, useEffect } from "react";

export const ShoppingCarContext = createContext()

export const inicializeLocalStorege = () => {
    const accountLS = localStorage.getItem('account')
    const signOutLS = localStorage.getItem('sign-out')
    let parsedAccount
    let parsedSignOut

    if(!accountLS) {
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {}
        setAccount(parsedAccount)
    }else{
        parsedAccount = JSON.parse(accountLS)
        setAccount(parsedAccount)
    }

    
    if(!signOutLS) {
        localStorage.setItem('sign-out', JSON.stringify({}))
        parsedSignOut = {}
        setSignOut(parsedSignOut)
    }else{
        parsedSignOut = JSON.parse(signOutLS)
        setSignOut(parsedSignOut)

    }
}

export const ShoppingCarProvider = ({children}) => {

    // Account 
    const [account, setAccount] = useState({})

    //Account . Sing Out
    const [signOut, setSignOut] = useState({})

    useEffect(() => {
        const accountLS = localStorage.getItem('account')
        const signOutLS = localStorage.getItem('sign-out')
        let parsedAccount
        let parsedSignOut
    
        if(!accountLS) {
            localStorage.setItem('account', JSON.stringify({}))
            parsedAccount = {}
            setAccount(parsedAccount)
        }else{
            parsedAccount = JSON.parse(accountLS)
            setAccount(parsedAccount)
        }
    
        
        if(!signOutLS) {
            localStorage.setItem('sign-out', JSON.stringify({}))
            parsedSignOut = {}
            setSignOut(parsedSignOut)
        }else{
            parsedSignOut = JSON.parse(signOutLS)
            setSignOut(parsedSignOut)
    
        }
      }, [])

    // Shopping cart . Increment
    const [count, setCount] = useState(0)

    //  Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Product Detail . show product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    });

    // Gets products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(Response => Response.json())
          .then(data => setItems(data))
    
      }, [])


    // search by title
    const [search, setSearch] = useState(null)

    const filteredItemsByTitle = (items, search) => {
        return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }



     // search by category
     const [searchByCategory, setSearchByCategory] = useState(null)

     const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, search, searchByCategory ) => {
        if(searchType === 'BY_Title') {
            return filteredItemsByTitle(items,search)
        }

        if(searchType === 'BY_CAREGORY') {
            return filteredItemsByCategory(items,searchByCategory)
        }

        if(searchType === 'BY_Title_AND_CATEGORY') {
            return filteredItemsByCategory(items,searchByCategory).filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        }

        if(!searchType) {
            return items
        }
    }

    useEffect(() => {
        if(search && searchByCategory) setFilteredItems(filterBy('BY_Title_AND_CATEGORY',items,search,searchByCategory))
        if(search && !searchByCategory) setFilteredItems(filterBy('BY_Title',items,search,searchByCategory))
        if(!search && searchByCategory) setFilteredItems(filterBy('BY_CAREGORY',items,search,searchByCategory))
        if(!search && !searchByCategory) setFilteredItems(filterBy(null,items,search,searchByCategory))
      }, [items, search, searchByCategory])
    
    // Shopping car . add product
    const [carProducts, setCarProducts] = useState([])

    // Shopping car . Open/Close
    const [isChechoutSideMenuOpen, setIsChechoutSideMenuOpen] = useState(false)
    const openChechoutSideMenu = () => setIsChechoutSideMenuOpen(true)
    const closeChechoutSideMenu = () => setIsChechoutSideMenuOpen(false)

    // Shopping car . Order 
    const [order, setOrder] = useState([])


    return (
        <ShoppingCarContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            carProducts,
            setCarProducts,
            isChechoutSideMenuOpen,
            openChechoutSideMenu,
            closeChechoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            search,
            setSearch,
            filteredItems,
            searchByCategory,
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </ShoppingCarContext.Provider>
    )
}