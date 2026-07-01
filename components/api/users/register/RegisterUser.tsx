"use client";
import { useRegisterUser } from "@/components/hooks/useRegisterUser";
import { User } from "@/models/User";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * 演習 8-6 画面のコンポーネントとページを作成し、動作確認する
 * ユーザー登録画面のコンポーネント
 */
export const RegisterUser = () => {
    const router = useRouter();
    // Custom Hooksから状態(isLoading, error)と操作(register)を取得
    // useRegisterUserでリターンしたisLoading, error, registerを使う
    const { register, isLoading, error } = useRegisterUser();

    // フォームの入力値を管理するローカルState
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 登録ボタンが押されたときの処理
    // ↓はそのまま真似していい
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // ↑は初期化　イベントの前処理

        // ↓入力された名前・メール・パスワードで新しいユーザの作成
        const newUser: User = { username, email, password };

        // Custom Hooksの登録関数を呼び出す
        // useRegisterUserから受け取ったregister
        const success = await register(newUser);

        // 成功した場合はログイン画面へ自動的に遷移する
        if (success) {
            //      ↓Pushで引数に登録されたURLに自動で遷移してくれる　別の画面に表示したい場合に利用
            router.push("/api/auth/login");
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">ユーザー登録</h2>

            {/* エラーメッセージの表示 */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 whitespace-pre-wrap">
                    {error}
                </div>
            )}
            {/* 　　　↓送信ボタンを押したときhandleSubmitを実行 */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-bold mb-2">ユーザー名</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2">メールアドレス</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2">パスワード</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}    //Stateの設定
                    className={`w-full py-2 px-4 rounded-md text-white font-bold transition-colors ${
                        isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    {isLoading ? "登録処理中..." : "登録する"}
                </button>
            </form>
        </div>
    );
};