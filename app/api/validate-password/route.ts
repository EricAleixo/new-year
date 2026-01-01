import { NextRequest, NextResponse } from "next/server";

// Senhas dos amigos
const friendsPasswords: Record<string, string> = {
  marcos: "voltaratomarbomba",
  emily: "ressucitado",
  gustavo: "obaacaiteria",
  júlia: "01/12/2007",
  emmaely: "floquinho",
  jamilly: "aprovadaenem",
  valter: "atevoinhafaz",
  ayrton: "rockstar",
  ittalo: "flamengoo",
  anael: "humanamenteimpossivel",
  renan: "tropadocorinthians",
  bea: "palmeirasnaotemmundial",
  "joão victor": "trompeteiro",
  matheus: "vortix",
  thiago: "jornalismocampina",
  léo: "printevariavel",
  yuri: "garotodeprograma",
  emmanuel: "capivara",
  klécio: "perfect",
  jordan: "flamenguista",
  gabriel: "hollowknight",
  elionais: "vereador"
};

export async function POST(req: NextRequest) {
  try {
    const { friendName, password } = await req.json();

    if (!friendName || !password) {
      return NextResponse.json(
        { success: false, message: "Dados incompletos" },
        { status: 400 }
      );
    }

    const correctPassword = friendsPasswords[friendName.toLowerCase()];

    if (!correctPassword) {
      return NextResponse.json(
        { success: false, message: "Amigo não encontrado" },
        { status: 404 }
      );
    }

    if (password === correctPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: "Senha incorreta" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Erro no servidor" },
      { status: 500 }
    );
  }
}