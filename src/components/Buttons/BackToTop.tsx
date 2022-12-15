import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "./Button"

export function BackToTop() {
  return (
    <Button>
      <FontAwesomeIcon icon={faChevronUp} />
    </Button>
  )
}
