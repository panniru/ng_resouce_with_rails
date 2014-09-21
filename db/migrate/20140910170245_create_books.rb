class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :isbn
      t.string :name
      t.boolean :damaged

      t.timestamps
    end
  end
end
