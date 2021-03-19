import firebaseAdmin from './firebase-admin'

const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));

const createDummyEmailAdderss = (max:number):string[] => {
  let arr = []
  for (let i=0; i<max; i++){
    const rand = Math.random().toString(36).slice(-8);
    arr[i] = `${rand}@example.com`
  }
  return arr
}


(async () => {
  const test = createDummyEmailAdderss(100)
  await Promise.all(test.map( async mail => {
    await firebaseAdmin.auth().createUser({
      email: mail
    }).then((userRecord) => {
      console.log(userRecord.uid)
    })
    await sleep(50); // 速すぎると`QUOTA_EXCEEDED`になるので適当に間隔を開ける
  }))
  console.log("DONE")
  process.exit()
})();