import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <Header />
      <section className="p-8 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4">Have questions or need a quote? We’d love to hear from you!</p>
        <div className="space-y-2">
          <p>📧 Email: support@logitrans.com</p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>📍 Location: Gurgaon, India</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
