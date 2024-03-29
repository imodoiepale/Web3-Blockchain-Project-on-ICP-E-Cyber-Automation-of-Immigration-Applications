/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/KSsFYBULIdg
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function About() {
  return (
    <main className="flex flex-col items-center justify-center space-y-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center">Simplify Your Immigration Process</h1>
      <p className="max-w-[700px] text-gray-500 dark:text-gray-400 text-center">
        Welcome to our dApp, your one-stop solution for simplifying the immigration process. With our range of services,
        we aim to make your journey hassle-free and efficient. Here are the services we currently offer:
      </p>
      <div className="grid gap-6 md:grid-cols-3 w-full max-w-5xl">
        <Card>
          <CardHeader>
            <CardTitle>Special Pass Application</CardTitle>
          </CardHeader>
          <CardContent>
            Apply for a special pass with ease using our automated form filling system. Say goodbye to manual paperwork
            and let our dApp handle the process for you.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Business Permit Application</CardTitle>
          </CardHeader>
          <CardContent>
            Looking to start a business in a new country? Our dApp can assist you in filling out the necessary forms for
            a business permit application. Save time and focus on what matters most - your business.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Work Permit Application</CardTitle>
          </CardHeader>
          <CardContent>
            Planning to work abroad? Our dApp simplifies the work permit application process by automating the form
            filling process. Say goodbye to tedious paperwork and let our dApp handle it for you.
          </CardContent>
        </Card>
      </div>
      <p className="max-w-[700px] text-gray-500 dark:text-gray-400 text-center">
        We are constantly working to expand our services and automate more processes to make your immigration journey as
        seamless as possible. Stay tuned for more updates and enhancements to our dApp.
      </p>
    </main>
  )
}
