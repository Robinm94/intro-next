const idPage = async ({ params }: { params: { id: string[] } }) => {
  const params1 = await params
  console.log(params1)
  return <div>id: {params1.id}</div>
}

export default idPage
