import { useEffect, useState } from 'react'
import { AxiosCall } from '../models/AxiosCall.model'
import { AxiosResponse } from 'axios'

export const useFetch = <T>() => {
  const [loading, setLoading] = useState(false)
  let controller: AbortController

  const callEndpoint = async (axiosCall: AxiosCall<T>) => {
    if (axiosCall.controller) controller = axiosCall.controller
    setLoading(true)
    let result = {} as AxiosResponse<T>
    try {
      result = await axiosCall.call
    } catch (err: unknown) {
      setLoading(false)
      throw err
    }

    setLoading(false)
    return result
  }

  const cancelEndpoint = () => {
    setLoading(false)
    controller?.abort()
  }

  useEffect(() => {
    return () => {
      cancelEndpoint()
    }
  })

  return { loading, callEndpoint }
}

export default useFetch
