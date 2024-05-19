const [data, setData] = useState([])

useEffect(() => {
    (async() => {
        const res =   await requestNextPage(page);
        setData((dt) => {
          return [...res, ...dt]
        });
    })()
}, [page])