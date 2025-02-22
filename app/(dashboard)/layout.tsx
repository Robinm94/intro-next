const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div>
      <h1>dashboard</h1>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
