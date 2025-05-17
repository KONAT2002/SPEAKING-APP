"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Volume2, Mic } from "lucide-react";

const data = [
  { en: "Cheers, bro!", vn: "Cạn ly nhé ông bạn!" },
  { en: "Let’s have a toast to a good day!", vn: "Nâng ly chúc mừng một ngày tuyệt vời!" },
  { en: "Bottoms up!", vn: "100% nha!" },
  { en: "Drink up!", vn: "Uống đi!" },
  { en: "You eat, I pour.", vn: "Ông ăn đi, tui rót!" },
  { en: "Don’t let your glass go empty!", vn: "Đừng để ly trống nha!" },
  { en: "Slow down, man. It's not a race!", vn: "Từ từ thôi ông, đâu phải chạy đua đâu!" },
  { en: "Who's turn is it to pour?", vn: "Tới lượt ai rót vậy?" },
  { en: "You always get funnier after a few drinks!", vn: "Ông càng uống càng mặn ghê!" },
  { en: "I think you're already tipsy!", vn: "Tôi nghĩ ông xỉn nhẹ rồi đó!" },
  { en: "Remember last time you danced after two beers?", vn: "Nhớ lần trước ông nhảy sau 2 chai không?" },
  { en: "Don’t talk about work now, relax!", vn: "Đừng nói chuyện công việc nữa, xả hơi đi!" },
  { en: "Last round and we call it a night.", vn: "Uống ly cuối rồi về nha." },
  { en: "Let’s grab some food before heading home.", vn: "Kiếm gì lót bụng trước khi về đi." },
  { en: "Thanks for the good time, guys!", vn: "Cảm ơn mấy ông vì buổi tối vui vẻ!" },
  { en: "Get home safe!", vn: "Về nhà an toàn nha!" },
  { en: "Same time next week?", vn: "Tuần sau nhậu tiếp không?" },
  { en: "Hey! How’s everything going?", vn: "Chào! Dạo này mọi thứ sao rồi?" },
  { en: "Long time no see! How have you been?", vn: "Lâu rồi không gặp! Dạo này sao rồi?" },
  { en: "What’s up? Busy with work these days?", vn: "Dạo này có gì mới không? Bận rộn với công việc hả?" },
  { en: "Did you sleep well last night?", vn: "Tối qua ngủ ngon không?" },
  { en: "You look tired today – rough day?", vn: "Hôm nay trông bạn mệt quá – ngày làm việc căng à?" },
  { en: "Let me know if you need a hand with that.", vn: "Cần giúp gì thì nói mình nha." },
  { en: "I’ll send it over to you by lunch.", vn: "Mình sẽ gửi cho bạn trước giờ trưa." },
  { en: "Can we go over this drawing together real quick?", vn: "Mình xem nhanh bản vẽ này với nhau được không?" },
  { en: "Do you want to grab a coffee after the meeting?", vn: "Họp xong đi uống cà phê không?" },
  { en: "We’re running a bit behind schedule, right?", vn: "Mình hơi trễ tiến độ đúng không?" },
  { en: "Thanks for taking the time to meet today.", vn: "Cảm ơn bạn đã dành thời gian gặp hôm nay." },
  { en: "Let me walk you through the main specs.", vn: "Để mình giải thích qua các thông số chính nha." },
  { en: "Hope that answers your question.", vn: "Hy vọng điều đó trả lời được câu hỏi của bạn." },
  { en: "Catch you later!", vn: "Gặp lại sau nha!" },
  { en: "Let’s keep in touch.", vn: "Giữ liên lạc nha." }
];

export default function SpeakingApp() {
  const [index, setIndex] = useState(0);
  const current = data[index];

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(current.en);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  const recordAndCompare = () => {
    alert("🎤 Chức năng ghi âm & so sánh phát âm đang được phát triển thêm!");
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <Card>
        <CardContent className="p-6 space-y-3">
          <div className="text-xl font-semibold">{current.en}</div>
          <div className="text-gray-600">{current.vn}</div>
          <div className="flex flex-wrap gap-2 pt-2">
            <Button onClick={speak} variant="outline">
              <Volume2 className="w-4 h-4 mr-2" /> Nghe phát âm
            </Button>
            <Button onClick={recordAndCompare} variant="outline">
              <Mic className="w-4 h-4 mr-2" /> Ghi âm & kiểm tra phát âm
            </Button>
            <Button onClick={next} variant="default">
              Câu tiếp theo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
