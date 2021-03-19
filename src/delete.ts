import firebaseAdmin from './firebase-admin'

const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));

(async () => {
  const users = await firebaseAdmin.auth().listUsers();
  await Promise.all( users.users.map( async user => {
    await firebaseAdmin.auth().deleteUser(user.uid);
    console.log(user.uid)
    await sleep(50); // 速すぎると`QUOTA_EXCEEDED`になるので適当に間隔を開ける
  }))
  console.log("DONE")
  process.exit()
})();