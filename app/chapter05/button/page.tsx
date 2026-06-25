import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">shadcn/ui Buttonのバリアント（種類）</h2>
      
      <div className="flex flex-wrap gap-4">
        {/* 1. 標準（Primary）: 一番目立たせたいメインのアクション */}
        <Button>Default (標準)</Button>

        {/* 2. 警告（Destructive）: 削除など、注意を促す危険なアクション */}
        <Button variant="destructive">Destructive (警告)</Button>

        {/* 3. 枠線（Outline）: キャンセルなど、少し控えめなアクション */}
        <Button variant="outline">Outline (枠線)</Button>

        {/* 4. サブ（Secondary）: 補助的なアクション */}
        <Button variant="secondary">Secondary (サブ)</Button>

        {/* 5. 透明（Ghost）: マウスを乗せた時だけ背景色が出る、目立たないボタン */}
        <Button variant="ghost">Ghost (透明)</Button>

        {/* 6. リンク風（Link）: 文字だけのリンクのように見せるボタン */}
        <Button variant="link">Link (リンク)</Button>
      </div>
    </div>
  );
}