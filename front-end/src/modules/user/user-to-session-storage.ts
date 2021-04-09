export const userToSessionStorage = (obj: any) => {
    Object.entries(obj).forEach((item: [any, any]) => {
        sessionStorage.setItem(item[0].toString(), item[1].toString());
      })
}