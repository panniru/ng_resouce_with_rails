class BooksController < ApplicationController
  
  def index
    respond_to do |format|
      format.json do
        render :json => Book.all, :root => false
      end
      format.html
    end
  end

  def create
    respond_to do |format|
      format.json do
        book = Book.new(book_params)
        render :json => book.save
      end
    end

  end

  def update
    respond_to do |format|
      format.json do
        book = Book.find(params[:id])
        render :json => book.update(book_params)
      end
    end
  end

  def show
    respond_to do |format|
      format.json do
        book = Book.find(params[:id])
        render :json => book, :root => false
      end
    end
  end

  def destroy
    respond_to do |format|
      format.json do
        book = Book.find(params[:id])
        render :json => book.destroy
      end
    end
  end

  def mark_as_damaged
    respond_to do |format|
      format.json do
        book = Book.find(params[:id])
        book.update(:damaged => true)
        render :json => book
      end
    end
  end
  
  private
  
  def book_params
    params.require(:book).permit(:isbn, :name, :damaged)
  end

end
