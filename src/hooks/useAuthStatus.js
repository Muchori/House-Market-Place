import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useRef, useState } from 'react'

export const useAuthStatus = () => {
  const [loggedIn, setLoggeddIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggeddIn(true)
        }
        setCheckingStatus(false)
      })
    }
    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  return { loggedIn, checkingStatus }
}
