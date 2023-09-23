import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [push, setPush] = useState(false);
  useEffect(() => {
    if (router.isReady && !push) {
      setPush(true);
      console.log("route");
      router.push("/B3/S23");
      
    }
  }, [router.isReady]);
}
