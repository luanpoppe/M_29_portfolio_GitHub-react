import { P } from "./styles"

export type Props = {
  children: string
  tipo?: "principal" | "secundario"
  fontSize?: number
}

const Paragrafo = (props: Props) => (
  <P fontSize={props.fontSize} tipo={props.tipo}>
    {props.children}
  </P>
)

export default Paragrafo
