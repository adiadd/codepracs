import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
  Loader2
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 50 50" {...props}>
      <path
        d="M24 0C10.766 0 0 10.766 0 24s10.766 24 24 24 24-10.766 24-24S37.234 0 24 0Zm3.971 35.064a1.163 1.163 0 0 1-.335.113c-.009.002-.016.008-.025.01a1.205 1.205 0 0 1-.189.016h-.03a1.214 1.214 0 0 1-.348-.063c-.041-.013-.078-.032-.117-.049a1.156 1.156 0 0 1-.21-.121c-.037-.027-.073-.053-.107-.084a1.18 1.18 0 0 1-.161-.19c-.025-.035-.054-.065-.075-.103l-.011-.015c-.014-.027-.013-.056-.025-.084-.039-.088-.083-.175-.1-.274l-2.237-12.882-2.237 12.882c-.013.073-.052.131-.077.198-.019.053-.021.108-.048.16-.008.016-.022.027-.031.042-.021.036-.047.065-.072.099a1.155 1.155 0 0 1-.211.219c-.029.023-.055.047-.086.068a1.21 1.21 0 0 1-.361.162c-.023.006-.047.005-.07.009-.072.014-.144.029-.218.029-.053 0-.105-.012-.158-.019-.015-.002-.028.004-.043.001-.009-.002-.015-.008-.024-.009a1.161 1.161 0 0 1-.336-.114c-.352-.189-8.623-4.757-8.623-16.778a1.188 1.188 0 0 1 2.376 0c0 7.693 3.824 11.914 5.961 13.677l.509-2.931c-4.221-6.998-4.532-14.68-4.542-15.009a1.188 1.188 0 0 1 2.375-.08c.002.065.235 5.585 2.832 11.261l1.912-11.012a1.189 1.189 0 0 1 2.34 0l1.913 11.012c2.597-5.676 2.83-11.196 2.832-11.261a1.195 1.195 0 0 1 1.228-1.146c.655.022 1.169.57 1.147 1.226-.011.329-.322 8.011-4.542 15.009l.512 2.946c2.144-1.747 5.958-5.938 5.958-13.692a1.188 1.188 0 0 1 2.376 0c0 12.021-8.271 16.589-8.623 16.778Z"
        style={{
          fill: "currentColor",
        }}
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  spinner: Loader2,
}
